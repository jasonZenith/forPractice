var hasCycle = function(head) {
    if(head == null){
        return false;
    }
    s = head;
    f = head;
    while(f!== null&&f.next!=null){
        s=s.next;
        f=f.next.next;
        if(s==f){
            return true;
        }
    }
    return false;
};
