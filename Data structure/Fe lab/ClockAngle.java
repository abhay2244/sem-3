import java.util.Scanner;
public class ClockAngle
{
	public static double calculateAngle(int h,int m)
	{
		int ha=30*h;
		int ma=6*m;
		if (ha-ma >0) {
			if (ha-ma >180) {
				return (360-(ha-ma));
			}
			else
			{
				return (ha-ma);	
			}
		}
		else
		{
			if (ma-ha >180) {
				return (360-(ma-ha));
			}
			else{
				return (ma-ha);
			}
		}
	}
	public static void main(String[] args)
	{
		Scanner input=new Scanner(System.in);
		System.out.println("Please Enter Hour");
		int h=input.nextInt();
		System.out.println("Please Enter Minut");
		int m=input.nextInt();
		double angle=calculateAngle(h,m);
		System.out.println("Angle between hour and minut "+ angle);
	}
}