<?php

// Numeric array
$numbers = array(1, 2, 3, 4, 5);

echo "Numeric array:<br>";
foreach ($numbers as $number) {
  echo $number . "<br>";
}

echo "<br>";

// Associative array
$person = array("name" => "John", "age" => 30, "city" => "New York");

echo "Associative array:<br>";
foreach ($person as $key => $value) {
  echo $key . ": " . $value . "<br>";
}

echo "<br>";

// Multidimensional array
$students = array(
  array("name" => "John", "age" => 20, "city" => "London"),
  array("name" => "Mary", "age" => 22, "city" => "Paris"),
  array("name" => "Bob", "age" => 21, "city" => "New York")
);

echo "Multidimensional array:<br>";
foreach ($students as $student) {
  foreach ($student as $key => $value) {
    echo $key . ": " . $value . "<br>";
  }
  echo "<br>";
}

?>
