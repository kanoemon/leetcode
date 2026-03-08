<?php

class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $mapping = [
            'I' => 1,
            'V' => 5,
            'X' => 10,
            'L' => 50,
            'C' => 100,
            'D' => 500,
            'M' => 1000
        ];

        $result = 0;
        $length = strlen($s);

        for($i = 0; $i < $length; $i++) {
            $current = $mapping[$s[$i]];

            // 次の文字列がcurrentより大きい場合
            if ($mapping[$s[$i + 1]] > $current) {
                $result = $result - $current;
            } else {
                $result = $result + $current;
            }
        }
        return $result;
    }
}
