import { List } from "@/components/List";

export const Stats = () => {
  return (
    <List className="text-white">
      <List.Item>
        <List.Item.Label>Flights</List.Item.Label>
        <List.Item.Value>72</List.Item.Value>
      </List.Item>
      <List.Item>
        <List.Item.Label>Flight time</List.Item.Label>
        <List.Item.Value unit="mins">~128</List.Item.Value>
      </List.Item>
      <List.Item>
        <List.Item.Label>Distance covered</List.Item.Label>
        <List.Item.Value unit="km">17</List.Item.Value>
      </List.Item>
      <List.Item>
        <List.Item.Label>Max ground speed</List.Item.Label>
        <List.Item.Value unit="m/s">10</List.Item.Value>
      </List.Item>
      <List.Item>
        <List.Item.Label>Max altitude</List.Item.Label>
        <List.Item.Value unit="meters">24</List.Item.Value>
      </List.Item>
    </List>
  );
};
