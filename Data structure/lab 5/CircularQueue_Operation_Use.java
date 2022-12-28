import java.util.Scanner;
class CircularQueue_Operation{
	Object[] queue;
	int front=-1;
	int rear=-1;
	Object temp;
	int size;
	void initializeQueue(int n){
		queue=new Object[n];
	}
	void cqInsert(Object x){
		if (rear==(queue.length-1)) {
			if (front==0) {
				System.out.println("Queue OverFlow");
				return;
			}
			else {
				rear=0;
			}
		}
		else {
			rear++;
		}
		if (front==rear) {
			System.out.println("Queue OverFlow");
			return ;
		}
		queue[rear]=x;
		if (front==-1) {
			front=0;
		}
		return ;
	}
	Object cqDelete(){
		if (front<=-1) {
			System.out.println("Queue UnderFlow");
			return 0;
		}
		temp=queue 	[front];
		if (front==rear) {
			rear=front=-1;
			return temp;
 			}
 		if (front==(queue.length-1)) {
			front=0;
 		}
 		else {
 				front++;
 			}
 		return 	 temp;
	}
	void display(){
		if (front<=-1) {
			System.out.println("Queue UnderFlow");
			return ;
		}
		size=front;
		while (size!=(rear+1)) {
			System.out.println("Element of "+size+" is "+queue[size]);
			if (size==(queue.length-1)) {
				if (front==0) {}
				else {
					front=0;
				}
			}
			size++;
		}
	}
}
public class CircularQueue_Operation_Use{
	public static void main(String[] args){
		CircularQueue_Operation q1=new CircularQueue_Operation();
		Scanner input=new Scanner(System.in);
		System.out.println("please enter Size of Queue");
		q1.initializeQueue(input.nextInt());
		int temp;
		System.out.println("1.cqInsert \n2.cqDelete\n3.Diplay\n4.Exit");
		temp=input.nextInt();
		while(temp!=4){
			switch(temp){
				case 1:
				System.out.println("Enter Element for insert");
				q1.cqInsert(input.nextInt());
				break;
				case 2:
				System.out.println("Delete Element is"+q1.cqDelete());
				break;
				case 3:
				q1.display();
				break;
				case 4:
				break;
				default:
				System.out.println("Invalid Choice");
				break;
			}
			System.out.println("1.cqInsert \n2.cqDelete\n3.Diplay\n4.Exit");
			temp=input.nextInt();
		}
	}
}