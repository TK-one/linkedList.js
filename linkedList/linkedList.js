var LinkedList = (function () {
  function LinkedList () {
    if (!(this instanceof LinkedList)) {
      return new LinkedList;
    }

    this.length = 0;
    this.head = null;
  }

  function Node (data) {
    this.data = data;
    this.next = null;
  }

  LinkedList.prototype.add = function (data) {
    var node = new Node(data);
    var current = this.head;

    this.length++;
    if (!current) {
      this.head = node;
      return node;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = node;

    return node;
  }

  LinkedList.prototype.search = function (index) {
    var i = 0,
        current = this.head;

    if (!Number.isInteger(index) || index < 0 || this.length < index + 1) {
      return null;
    }

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  }

  LinkedList.prototype.remove = function (index) {
    var i = 0,
        nodeToRemove = this.head,
        before = null;

    if (!Number.isInteger(index) || index < 0 || this.length < index + 1) {
      return null;
    }

    if (index === 0) {
      this.head = nodeToRemove.next;
    } else {
      while(i < index) {
        before = nodeToRemove;
        nodeToRemove = nodeToRemove.next;
        i++;
      }

      before.next = nodeToRemove.next;
    }

    this.length--;
    
    return nodeToRemove;
  }

  return LinkedList;
})();