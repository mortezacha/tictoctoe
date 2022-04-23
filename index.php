<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بازی دوز</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

</head>
<body>
<table class="puzzle-container">
      <?php 
        $rows=3;
        $cul=3;
        for($i=0;$i<=$rows-1;$i++){
          ?>
          <tr>
          <?php for($j=$i*$cul+1;$j<=$i*$cul+$cul;$j++){?>
            <td><div id="<?php echo $j;?>" class="answer-container" onclick="test(this.id)"></div></td>
            <?php }?>
            </tr>
          <?php }?>
    </table>
    
</body>
</html>