import { List as ListElement } from "./List";
import { ListItem, ListItemLabel, ListItemValue } from "./Item";

export const List = Object.assign(ListElement, {
  Item: Object.assign(ListItem, {
    Label: ListItemLabel,
    Value: ListItemValue,
  }),
});
