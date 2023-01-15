class Features {
  constructor(productsQuery, query) {
    this.productsQuery = productsQuery;
    this.query = query;
  }
  search() {
    const keyword = this.query.keyword
      ? {
          name: {
            $regex: this.query.keyword,
            $options: "i",
          },
        }
      : {};
    this.productsQuery = this.productsQuery.find(keyword);
    return this;
  }
}
module.exports = Features;
