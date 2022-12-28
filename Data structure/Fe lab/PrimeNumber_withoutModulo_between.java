import java.util.Scanner;
public class PrimeNumber_withoutModulo_between
{
	public static void main(String[] args)
	{
		Scanner input=new Scanner(System.in);
		System.out.println("please enter number");
		int n=input.nextInt();
		int array[]=new int[n];
		int num;
		int j;
		int flag=1;
		for(int x=2;x<n;x++)
		{
			j=x;	
			for (int i=2;i<j ;i++ ) 
			{
            	num=j;	  
	           	while(num>=i)
	            {
	          		num=num-i;
	                if(num==0)
	                {
	       				flag=0;
	       				break;		
	                }
	           	}
	            if (flag==0) {
	           	    	break;
	          	}    	
            }
        	if(flag==1)
	            {
	           		System.out.println("prime number is"+j); 		
	            }
		    flag=1;
	    }
	}
}