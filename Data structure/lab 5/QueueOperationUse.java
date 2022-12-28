import java.util.Scanner;
 class QueueOperation{
	Object[] queue;
	int front=-1;
	int rear=-1;
	Object temp;
	int size;
	void initializeQueue(int n){
		queue=new Object[n];
	}
	void enQueue(Object x){
		if (rear>=(queue.length-1)){
			System.out.println("Queue Overflow");
			return ;
		}
		rear++;
		queue[rear]=x;
		if(front==-1){
			front=0;
		}
		return ;
	}
	Object deQueue(){
		if (front==-1) {
			System.out.println("Queue Underflow");
			return 0;
		}
		temp=queue[front];
		if (front==rear) {
			rear=front=-1;
			return temp;
		}
	
		front++;
		return temp;
	}
	void display(){
		if (front<=-1) {
			System.out.println("Queue UnderFlow");
			return ;
		}
		size=front;
		while (size!=(rear+1)) {
			System.out.println("Element of "+size+" is "+queue[size]);
			size++;
		}
	}
}
public class QueueOperationUse{
	public static void main(String[] args){
		QueueOperation q1=new QueueOperation();
		Scanner input=new Scanner(System.in);
		System.out.println("please enter Size of Queue");
		q1.initializeQueue(input.nextInt());
		int temp;
		System.out.println("1.Enqueue \n2.Dequeue\n3.Display\n4.Exit");
		temp=input.nextInt();
		while(temp!=4){
			switch(temp){
				case 1:
				System.out.println("Enter Element for insert");
				q1.enQueue(input.nextInt());
				break;
				case 2:
				System.out.println("Delete Element is"+q1.deQueue());
				break;
				case 3:
				q1.display();
				break;
				case 4:
				break;
				default:
				System.out.println("Invalid choice");
				break;
			}
			System.out.println("1.Enqueue \n2.Dequeue\n3.Display\n4.Exit");
			temp=input.nextInt();
		}
	}
}