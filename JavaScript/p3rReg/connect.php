<?php
    $PersonaName  = $_POST['pname']
    $PersonaArcana  = $_POST['arcanaSelect']
    $PersonaLevel  = $_POST['plevel']
    $PersonaInheritance= $_POST['pinhertiance']
    $PersonaReflects  = $_POST['preflects']
    $PersonaAbsorbs = $_POST['pabsorbs']
    $PersonaBlocks = $_POST['pblocks']
    $PersonaResists  = $_POST['presists']
    $PersonaWeakness  = $_POST['pweak']

    $conn = new mysqli('localhost','root','','personas');
    if($conn->connect_error)
    {
        die('Connection error: ' . $conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("INESRT INTO personas(PersonaName,PersonaArcana,PersonaLevel,PersonaInheritance,PersonaReflects,PersonaAbsorbs,PersonaBlocks,PersonaResists,PersonaWeakness")
            VALUES(?,?,?,?,?,?,?,?,?)");"
        $stmt->bind_param("ssissssss",$PersonaName,$PersonaArcana,$PersonaLevel,$PersonaInheritance,$PersonaReflects,$PersonaAbsorbs,$PersonaBlocks,$PersonaResists,$PersonaWeakness)
        $stmt->execute();
        echo "Persona registered succesfully...";
        $stmt->close();
        $conn->close();
    }



?>