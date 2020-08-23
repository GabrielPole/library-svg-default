<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $putdata = fopen("php://input", "r");
    $temp = '';

    while ($data = fread($putdata, 8192)) {
          $temp .= $data;
    }
    fclose($putdata);

    file_put_contents('icons.json',$temp); 
    echo $temp;
}
else
{
  echo file_get_contents('icons.json');
}
?>