class ListNode{
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity=capacity;
        this.hashTable={};
        this.count=0;
        this.dummyHead=new ListNode();
        this.dummyTail=new ListNode();
        this.dummyHead.next=this.dummyTail;
        this.dummyTail.prev=this.dummyHead;
    }

    get(key){
        let node=this.hashTable[key];
        if(node==null) return -1;
        this.moveToHead(node);
        return node.value;
    }

    put(key,value){
        let node=this.hashTable[key];
        if(node==null){
            let newNode=new ListNode(key,value);
            this.hashTable[key]=newNode;
            this.count++;
            this.addToHead(newNode);

            if(this.count>this.capacity){
                this.removeLRUItem();
            }
        }else{
            node.value=value;
            this.moveToHead(node);
        }
    }

    removeLRUItem(){
        let tail=this.dummyTail.prev;
        this.removeFromList(tail);
        delete this.hashTable[tail.key];
        this.count--;
    }

    moveToHead(node){
        this.removeFromList(node);
        this.addToHead(node);
    }

    removeFromList(node){
        let tempForPrev=node.prev;
        let tempForNext=node.next;
        tempForPrev.next=tempForNext;
        tempForNext.prev=tempForPrev;
    }

    addToHead(node){
        node.prev=this.dummyHead;
        node.next=this.dummyHead.next;
        this.dummyHead.next=node;
        node.next.prev=node;
    }
}