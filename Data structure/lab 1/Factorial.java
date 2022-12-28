import java.util.Scanner;
public class Factorial
{
	public void findFactorial(int n)
	{
		int result=1;
		for (int i=1;i<=n ; i++) {
			result=result*i;
		}
		System.out.println("Factorial of nuber is"+ result);	
	}
	public static void main(String[] args)
	{
		Scanner input=new Scanner(System.in);
		System.out.println("Please enter number");
		int n=input.nextInt();
		
		Factorial f1=new Factorial();
		f1.findFactorial(n);
	}
}