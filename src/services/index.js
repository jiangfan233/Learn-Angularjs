import angular from "angular";

const Services = "services"; 
 
export const Tree = "tree";

angular.module(Services, [])
    .service(Tree, function() {
        const self = this;

        // 强化条目
        const enhanceItem = function(item, childrenName) {
            item.$hasChildren = function() {
                const subItems = this[childrenName];
                return angular.isArray(subItems) && subItems.length > 0;
            }

            item.$foldToggle = function() {
                this.$folded = !this.$folded;
            }

            item.$isFolded = function() {
                return this.$folded;
            }

            const setCheckState = function(node, checked) {
                node.$checked = checked;
                if(node.$hasChildren()) {
                    angular.forEach(node[childrenName], function(item) {
                        setCheckState(item, checked);
                    })
                }
            }

            item.$check = function(checked) {
                setCheckState(item, checked);
            }

            item.$isChecked = function() {
                return this.$checked;
            }

            item.$indeterminate = function() {
                if(!this.$hasChildren()) return false;
                const items = this[childrenName];
                const checkedItems = items.filter(item => !!item.$isChecked());
                return checkedItems.length > 0 && checkedItems.length < items.length;
            }

        }

        this.enhance = function(items, childrenName) {
            if(angular.isUndefined(childrenName)) {
                childrenName = "items";
            }

            angular.forEach(items, function(item) {
                enhanceItem(item, childrenName);
                if(item.$hasChildren()) {
                    self.enhance(item[childrenName], childrenName);
                }
            })
            return items;
        }

    })




 export default Services;