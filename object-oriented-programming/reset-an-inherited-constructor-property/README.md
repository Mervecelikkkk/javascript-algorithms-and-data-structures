
# --description--

When an object inherits its `prototype` from another object, it also inherits the supertype's constructor property.

Here's an example:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

But `duck` and all instances of `Bird` should show that they were constructed by `Bird` and not `Animal`. To do so, you can manually set the constructor property of `Bird` to the `Bird` object:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

Fix the code so `duck.constructor` and `beagle.constructor` return their respective constructors.

