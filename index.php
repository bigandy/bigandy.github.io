<?php 

/* CODE is from this fine url : http://humbuckercode.co.uk/licks/code/create-wordpress-posts-php-script/ */
    /**
     * Performs a GET or POST request depending on whether there are data or not
     *
     * @param string $url 
     * @param array $data 
     * @return string
     */
    function get_data($url,$data = false)
    {
      $ch = curl_init();
      $timeout = 5;
      curl_setopt($ch,CURLOPT_URL,$url);
      curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
      curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
      # If we're trying to post data, we need to use the CURL post interface
      if($data){
        $data_string = '';
        foreach($data as $key=>$value) { $data_string .= $key.'='.$value.'&'; }
        rtrim($data_string,'&');
        curl_setopt($ch,CURLOPT_POST,count($data));
        curl_setopt($ch,CURLOPT_POSTFIELDS,$data_string);
      }
      $data = curl_exec($ch);
      curl_close($ch);
      return $data;
    }

    $my_title = date('l jS \of F Y h:i:s A');

    $my_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam culpa magnam quod officiis repudiandae repellat tenetur unde ea adipisci ratione velit laborum praesentium aperiam corporis voluptatibus id illo. Id velit eius temporibus nemo minus. Veniam velit quisquam delectus enim veritatis fugit porro quaerat aut eveniet cum error voluptatum nobis provident?";

    $the_tags = "one, two, three";

    $root_url = "http://staging.big-andy.co.uk/api/";
    
    # Grab a nonce value that will later be used in the actual post
    $nonce_url = $root_url."get_nonce";
    $json = get_data($nonce_url,array('controller'=>'posts','method'=>'create_post'));
    $json_data =  json_decode($json, TRUE);
    $nonce = $json_data['nonce'];
    echo "Nonce value: ",$nonce,"\n";
    
    // Send the post data
    $post_url = $root_url."posts/create_post";
    $data = array( 
        'title' => $my_title, 
        'content' => $my_content, 
        'type' => 'run', 
        'tags' => $the_tags, 
        'status' => 'publish', 
        'author' => 'test-poster',
        'user_password' => 'q|66F[;Mr<', 
        'nonce' => $nonce
    );

    $json_api_response = get_data($post_url,$data);
    $resp = json_decode($json_api_response);
    echo "Response status: {$resp->status}";
?>