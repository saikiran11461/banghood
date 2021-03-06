import AttachMoney from "@mui/icons-material/AttachMoney"
// import HomeIcon from "@mui/icons-material/HomeIcon";
import ColorLens from "@mui/icons-material/ColorLens";
import ClearAll from "@mui/icons-material/ClearAll";
export const mensitems = [
    {
        name: "category",
        label: "Category",
        Icon: "HomeIcon",
        items: [
            { name: "shorts", label: "Shorts" },
            { name: "jackets", label: "Jackets" },
            { name: "pants", label: "Pants" },
            { name: "coats", label: "Coats" },
            { name: "swimwear", label: "Swimwear" },
            { name: "polo shirts", label: "Polo Shirts" },
            { name: "T-Shirts & Vests", label: "T-Shirts & Vests" }
        ]
    },
    {
        name: "size",
        label: "Size",
        Icon: ClearAll,
        items: [
            { name: "one sizes", label: "One Size" },
            { name: "XXS", label: "XXS" },
            { name: "XS", label: "XS" },
            { name: "S", label: "S" },
            { name: "M", label: "M" },
            { name: "L", label: "L" },
            { name: "XL", label: "XL" },
            { name: "XXL", label: " XXL" }
        ]
    },
    {
        name: "colour",
        label: "Colour",
        Icon: ColorLens,
        items: [
            { name: "black", label: "Black" },
            { name: "blue", label: "Blue" },
            { name: "red", label: "Red" },
            { name: "yellow", label: "Yellow" },
            { name: "green", label: "Green" },
            { name: "white", label: "White" }
        ]
    },
    {
        name: "price",
        label: "Price",
        Icon: AttachMoney,

        items: [
            { name: "200", label: "~200" },
            { name: "200-500", label: "200-500" },
            { name: "500-1000", label: "500-1000" },
            { name: "1000-1500", label: "1000-1500" },
            { name: "1500", label: "1500~" }
        ]
    }
];