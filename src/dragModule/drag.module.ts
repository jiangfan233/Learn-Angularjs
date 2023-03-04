import angular from "angular"


const DragModule = "dragModule";

angular
    .module(DragModule, [])
    .directive(DragModule, [
        "$document",
        function ($document) {
            return {
                link: function (scope, element, attrs) {

                    let x = 0;
                    let y = 0;
                    let startX = 0;
                    let startY = 0;

                    element.css({
                        cursor: "grab",
                        position: "relative",
                        border: "1px solid red"
                    });

                    element.on("mousedown", handle_mouse_down);

                    function handle_mouse_down(e: JQueryEventObject) {
                        e.preventDefault();
                        startX = e.clientX - x;
                        startY = e.clientY - y;
                        $document.on("mousemove", handle_mouse_move);
                        $document.on("mouseup", handle_mouse_up)
                    }

                    function handle_mouse_move(e: JQueryEventObject) {
                        x = e.clientX - startX;
                        y = e.clientY - startY;
                        element.css({
                            left: x + "px",
                            top: y + "px",
                            cursor: "grabbing",
                        })
                    }

                    function handle_mouse_up(e: JQueryEventObject) {
                        element.css({
                            cursor: "grab",
                        })
                        $document.off("mousemove", handle_mouse_move);
                        $document.off("mouseup", handle_mouse_up)
                    }

                    // element.on("de")

                }
            }
        }
    ])

export default DragModule;