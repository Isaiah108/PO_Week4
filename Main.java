package com.revature.poWeek4;

public class Main {

    public static void main(String[] args) {
        int num1 = 1;
        int num2 = 1;
        int sum = 0;
        while(true){
//            System.out.println("Num1: " + num1 + " Num2: " + num2);
            if(num1%2==0)
                sum+=num1;
            int tempNum = num1 + num2;
            num1 = num2;
            num2 = tempNum;

            if(num1>4000000)
                break;
        }
        System.out.println("Sum Of even Fibonacci Numbers <=4,000,000 is " + sum);
    }
}
