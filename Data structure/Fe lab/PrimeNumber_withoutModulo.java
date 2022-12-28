import java.util.Scanner;
public class PrimeNumber_withoutModulo 
{
    public static void main(String [] array)
    {
        Scanner input =new Scanner(System.in);
        System.out.println("Please enter number");
        int n=input.nextInt();
        int flag=1;
        int num;
        for (int i=2;i<n ;i++ ) {
            num=n;
            while(num>=i)
            {
                num=num-i;
                if(num==0)
                {
                    flag=0;
                    break;   
                }
            }
        }
        if (flag==1) {
            System.out.println("Number is prime");     
        }
        else{
            System.out.println("Number not is prime");
        }
     }
}
        
          

