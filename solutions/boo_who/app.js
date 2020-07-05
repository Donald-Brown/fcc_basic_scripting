function booWho(bool) {
  return (bool === true || bool === false) ? true : false;
  // this maybe more consise but mine works
  //return typeof bool === 'boolean';
}

booWho(null);