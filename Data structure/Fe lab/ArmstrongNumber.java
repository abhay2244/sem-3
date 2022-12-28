import java.util.Scanner;
public class ArmstrongNumber
{
	public static void main(String[] args)
	{
		Scanner input=new Scanner(System.in);
		System.out.println("Please Enter Number for get armstrong number");
		int n=input.nextInt();
		int x;
		int rem;
		int result;
		for (int i=1;i<=n ;i++ ) {
			 x=i;
			 rem=0;
			 result=0;
			 while(x!=0)
			 {
			 	rem=x%10;
			 	result+=rem*rem*rem;
			 	x=x/10;
			 }
			 if (result==i) {
			 	System.out.println("Number is armstrong" +result);
			 }
		}
	}
}