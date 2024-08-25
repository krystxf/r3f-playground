import { List as ListElement } from "@/components/List/List";
import { ListItem, ListItemLabel, ListItemValue } from "@/components/List/Item";

export const List = Object.assign(ListElement, {
  Item: Object.assign(ListItem, {
    Label: ListItemLabel,
    Value: ListItemValue,
  }),
});
