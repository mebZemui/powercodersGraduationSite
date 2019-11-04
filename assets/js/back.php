<?php

class Person
{
    private $name;
    private $called = false;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        $this->called = true;
        return $this->name;
    }

    public function isCalled()
    {
        return $this->called;
    }
}