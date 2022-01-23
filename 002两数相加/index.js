//
var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let l3 = new ListNode();
  let p3 = l3;
  let tmp = 0;
  while (p1 && p2) {
    p3.next = new ListNode((p1.val + p2.val + tmp) % 10);
    p3 = p3.next;
    tmp = (p1.val + p2.val + tmp - p3.val) / 10;
    p1 = p1.next;
    p2 = p2.next;
  }
  // l1还有元素未遍历
  while (p1) {
    p3.next = new ListNode((p1.val + tmp) % 10);
    p3 = p3.next;
    tmp = (p1.val + tmp - p3.val) / 10;
    p1 = p1.next;
  }
  // l2还有元素未遍历
  while (p2) {
    p3.next = new ListNode((p2.val + tmp) % 10);
    p3 = p3.next;
    tmp = (p2.val + tmp - p3.val) / 10;
    p2 = p2.next;
  }
  if (tmp > 0) {
    p3.next = new ListNode(tmp);
    p3 = p3.next;
  }
  l3 = l3.next;
  return l3;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // 807
console.log(addTwoNumbers([2, 4, 3], [5, 6])); // 342 + 65 = 407
console.log(addTwoNumbers([2, 4], [5, 6, 4])); // 42 + 465 = 507
console.log(addTwoNumbers([0], [0]));
// [2,4,3]
// [5,6,4]
// [7,0,8]
