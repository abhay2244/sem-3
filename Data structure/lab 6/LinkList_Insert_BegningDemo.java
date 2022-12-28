import java.util.Scanner;
class LinkedList{
	Node head;
	class Node{
		Object data;
		Node next;
		Node(Object data){
			this.data=data;
			this.next=null;
		}
		Node(){}
		
	}
}
class Linked_listInsert_Begning extends LinkedList {
	Node temp;
	Node pred;
	int count;
	public Node insetrBegning(Object x){
		Node new_node=new Node(x);
		new_node.next=head;
		head=new_node;
		System.out.println(new_node);
		return head;
	}
	public void display(){
		temp=head;
		while(temp!=null){
			System.out.print(temp.data +"  ");
			temp=temp.next;
		}                      
		System.out.print("\n");
	}
	public Node insertEnd(Object x){
		Node new_node=new Node(x);
		if (head==null) {
			head=new_node;
			return new_node;
		}
		temp=head;
		while(temp.next!=null){
			temp=temp.next;
		}
		temp.next=new_node;
		return head;
	}
	public Node inSord(Object x){
		Node new_node=new Node(x);
		if (head==null) {
			new_node.next = null;
			return new_node;
		}
		if ((int)head.data>=(int)new_node.data) {
			new_node.next=head;
			return new_node;
		}
		temp=head;
		while (temp.next!=null && (int)(new_node.data)>=(int)((temp.next).data)) {
			temp=temp.next;
		}
		new_node.next=temp.next;
		temp.next=new_node;
		return head;
	}
	public void delete(Object x){
		if (head==null) {
			System.out.println("underFlow");
			return ;
		}
		temp=head;
		while(x!=temp.data && temp!=null){
			pred=temp;
			temp=temp.next;
		}
		if (temp.data!=x) {
			System.out.println("Node not found");
			return ;
		}
		if (x==head.data) {
			head=head.next;
		}
		else {
			pred.next=temp.next;
		}
	}
	public void delete_first(){
		if (head==null) {
			System.out.println("Underflow");
			return ;
		}
		head=head.next;
		return;
	}
	public void delete_last(){
		if (head==null) {
			System.out.println("Underflow");
			return ;
		}
		temp=head;
		while(temp.next!=null){
			pred=temp;
			temp=temp.next;
		}
		if (head==temp) {
			head=null;
			return;
		}
		pred.next=null;
	}
	public int count_Nodes(){
		count=0;
		if (head==null) {
			count=0;
			return count;
		}
		temp=head;
		while (temp!=null){
			temp=temp.next;
			count++;
		}
		return count;
	}
	public Node copy(){
		Node current=head;
		Node newList;
		Node pred;
		
		if (head==null) {
			System.out.println("underFlow");
			return null;
		}
		else {
			newList=new Node(current.data);	
		}
		Node newList_temp=newList;
		while(current!=null){
			System.out.println(current.data);
			pred=current;
			current=current.next;
			Node temp=new Node(current.data);
			newList_temp.next=temp;
			System.out.println(newList_temp.data);
			newList_temp.next=pred;
			newList_temp=newList_temp.next;
			//newList.next=new Node();
			//newList.next.next=pred;
			
		}
		return newList;

	}
}
public class LinkList_Insert_BegningDemo{
	public static void main(String[] args){
		Scanner input=new Scanner(System.in);
		Linked_listInsert_Begning l1=new Linked_listInsert_Begning();
		System.out.println("1.InsertBegning of Node\n2.insertEnd of Node\n3.Insord\n4.Delete\n5.Count Node\n6.Display\n7.Copy\n8.Delete First Node\n9.Delete last Node\n10.Exit");
		int temp=input.nextInt();
		while(temp!=10){
			switch(temp){
				case 1:
					System.out.println("Enter value for Insert");
					l1.head = l1.insetrBegning(input.nextInt());
					break;
				case 2:
					System.out.println("Enter value for Insert");
					l1.head = l1.insertEnd(input.nextInt());
					break;
				case 3:
					System.out.println("Enter value for Insert");
					l1.head = l1.inSord(input.nextInt());
					break;
				case 4:
					System.out.println("Enter Node For Delete");
					l1.delete(input.nextInt());
					break;
				case 5:
					System.out.println("Total Node is "+l1.count_Nodes());
					break;
				case 6:
					l1.display();
					break;
				case 7:
					l1.copy();
					break;
				case 8:
					l1.delete_first();
					break;
				case 9:
					l1.delete_last();
					break;
				default:
					System.out.println("Invalid choice");
				break;
			}
			System.out.println("1.InsertBegning of Node\n2.insertEnd of Node\n3.Insord\n4.Delete\n5.Count Node\n6.Display\n7.Copy\n8.Delete First Node\n9.Delete last Node\n10.Exit");
			temp=input.nextInt();
		}
	}
}