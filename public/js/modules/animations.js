/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./resources/js/modules/animations.js ***!
  \********************************************/
var OBSERVER = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var target = entry.target;
      target.classList.add(entry.target.dataset.inviewAnim);
      target.classList.add("visible");
      OBSERVER.unobserve(entry.target);
    }
  });
});
document.querySelectorAll("[data-inview-anim]").forEach(function (obj) {
  OBSERVER.observe(obj);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL21vZHVsZXMvYW5pbWF0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQyxVQUFBQyxPQUFPLEVBQUk7RUFDcERBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEtBQUssRUFBSTtJQUN4QixJQUFJQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtNQUN6QixJQUFJQyxNQUFNLEdBQUdGLEtBQUssQ0FBQ0UsTUFBTTtNQUV6QkEsTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQ0osS0FBSyxDQUFDRSxNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO01BQ3JESixNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxVQUFVLENBQUM7TUFFL0JSLFFBQVEsQ0FBQ1csU0FBUyxDQUFDUCxLQUFLLENBQUNFLE1BQU0sQ0FBQztJQUNqQztFQUNELENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGTSxRQUFRLENBQUNDLGdCQUFnQixxQkFBcUIsQ0FBQyxDQUFDVixPQUFPLENBQUMsVUFBQVcsR0FBRyxFQUFJO0VBQzlEZCxRQUFRLENBQUNlLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21vZHVsZXMvYW5pbWF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPQlNFUlZFUiA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuXHRlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG5cdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcblx0XHRcdGxldCB0YXJnZXQgPSBlbnRyeS50YXJnZXQ7XHJcblxyXG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZChlbnRyeS50YXJnZXQuZGF0YXNldC5pbnZpZXdBbmltKTtcclxuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoYHZpc2libGVgKTtcclxuXHJcblx0XHRcdE9CU0VSVkVSLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWludmlldy1hbmltXWApLmZvckVhY2gob2JqID0+IHtcclxuXHRPQlNFUlZFUi5vYnNlcnZlKG9iaik7XHJcbn0pOyJdLCJuYW1lcyI6WyJPQlNFUlZFUiIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImludmlld0FuaW0iLCJ1bm9ic2VydmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYmoiLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIifQ==