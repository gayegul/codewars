function HTMLGen () {
  ['a','b','p','body','div','span','title'].forEach(function(tag) {
    this[tag] = function(content) {
      return '<' + tag + '>' + content + '</' + tag + '>';
    };
  }, this);

  this.comment = function(content) {
    return '<!--' + content + '-->';
  };
}
