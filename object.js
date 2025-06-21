const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  pages: 208,
  describe: function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
};

console.log(book.describe());