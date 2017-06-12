describe('LinkedList test', function () {
  var list,
      count;

  beforeEach(function () {
    list = new LinkedList();
    count = 4;
  });

  describe('list.add', function () {

    it('list.add() list to have valid length and node', function () {
      for (var i=0; i<count; i++) {
        var result = list.add(i+10);
        expect(typeof result).toBe('object');
        expect(result.data).not.toBeNull();
        expect(result.data).toBe(i+10);
      }
      expect(list.length).toEqual(count);
    });
  });

  describe('list.search', function () {
    it('list.search() return null with bad parameter', function () {
      var params = [
        'string',
        -23,
        function(){},
        {test: 'test'}
      ];

      params.forEach(function (param) {
        expect(list.search(param)).toEqual(null);
      });
    });

    it('list.search() return null when index is bigger than list length', function () {
      var toBeNull = list.search(0);
      expect(toBeNull).toBeNull();
      for (var i=0; i<count; i++) {
        list.add(i);
        var toBeNull = list.search(i+1);
        expect(toBeNull).toBeNull();
      }
    });

    it('list.add() and list.search() to get value', function () {
      
      for (var i=0; i<count; i++) {
        list.add(i+10);
      }

      for (var i=0; i<count; i++) {
        expect(list.search(i)).toEqual(i+10);
      }

    });

  });

  describe('list.remove', function () {

    it('list.remove() list to have valid length and node', function () {
      for (var i=0; i<count; i++) {
        list.add(i);
      }

      var result = list.remove(2);
      expect(result.data).toEqual(2);
      expect(list.length).toEqual(count-1);
      expect(list.search(2)).toEqual(3);
      
      result = list.remove(0);
      expect(result.data).toEqual(0);
      expect(list.length).toEqual(count-2);
      expect(list.search(0)).toEqual(1);
    });

    it('list.remove() return null with bad parameters', function () {
      var params = [
        'string',
        -23,
        function(){},
        {test: 'test'}
      ];

      params.forEach(function (param) {
        expect(list.remove(param)).toEqual(null);
      });
    });

    it('list.remove() return null when index is bigger than list length', function () {
      var toBeNull = list.search(0);
      expect(toBeNull).toBeNull();
      for (var i=0; i<count; i++) {
        list.add(i);
        var toBeNull = list.remove(i+1);
        expect(toBeNull).toBeNull();
      }
    });
  });
  
});
