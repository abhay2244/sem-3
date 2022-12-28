import java.util.Scanner;
public class StackUse{
	public static void main(String[] args){
		StackOperation t1=new StackOperation();
		Scanner input=new Scanner(System.in);
		System.out.println("Enter size of Stack");
		t1.initializeStack(input.nextInt());
		System.out.println("1.push\n2.pop\n3.peep\n4.hange\n5.display");
		System.out.println("Enter your choice for Stack operation");
		int choice=input.nextInt();
		int value;
		int position;
		while(choice!=6){
			switch(choice)
			{
				case 1:
					System.out.println("Enter value for push");
					value=input.nextInt();
					t1.push(value);
				break ;
				case 2:
					System.out.println("pop element is "+t1.pop());
				break;
				case 3:
					System.out.println("enter position of element for peep");
					position=input.nextInt();
					System.out.println("peep element is "+t1.peep(position));
				break;
				case 4:
					System.out.println("enter position of element for change");
					position=input.nextInt();
					System.out.println("Enter value for change");
					value=input.nextInt();
					t1.change(position,value);
				break;
				case 5:
					t1.display();
				break;
				case 6:
				break;
				default:
					System.out.println("invalid choice");
				break;
			}
			System.out.println("1.push\n2.pop\n3.peep\n4.hange\n5.display\n6.Exit from operation");
			System.out.println("Enter your choice for Stack operation");
			choice=input.nextInt();
		}
	}
}