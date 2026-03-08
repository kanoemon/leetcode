<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        foreach($nums as $k1 => $v1) {
            foreach($nums as $k2 => $v2) {
                if ($k1 === $k2) {
                    continue;
                }

                if ($v1 + $v2 === $target) {
                    return [$k1, $k2];
                }
            }
        }
    }
}
