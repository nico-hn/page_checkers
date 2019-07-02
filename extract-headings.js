{
  function pushHeading(node, headings) {
    if (/^h[1-6]/i.test(node.tagName)) {
      headings.push([node.tagName, node.textContent]);
    }
  }

  function traverseNodes(node, action, results = []) {
    action(node, results);

    if (node.length === 0) {
      return null;
    }
    const children = node.children;
    const childCount = children.length;
    for (let i = 0; i < childCount; i++) {
      traverseNodes(children[i], pushHeading, results);
    }
    return results;
  }
  console.log(traverseNodes(document.body, pushHeading));
}
