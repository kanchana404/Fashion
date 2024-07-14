import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAND, COLORS, MATERIAL, SIZE } from "@/constants";
import { Slider } from "./ui/slider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col mt-8 bg-gray-200 w-64 rounded-xl p-3">
        <h1 className="text-2xl font-semibold p-4">Filters</h1>

        <div className="ml-5">
          <h1 className="text-lg font-semibold text-gray-500">Size</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              {SIZE.map((name, index) => (
                <SelectItem key={index} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="ml-5 mt-4">
          <h1 className="text-lg font-semibold text-gray-500">Color</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
              {COLORS.map((name, index) => (
                <SelectItem key={index} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-10 ml-5">
          <h1 className="text-lg font-semibold text-gray-500">Price</h1>
          <Slider />
        </div>
        <div className="mt-6 ml-4">
          <h1 className="text-lg font-semibold text-gray-500">Brand</h1>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              {BRAND.map((name, index) => (
                <SelectItem key={index} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 ml-4">
          <h1 className="text-lg font-semibold text-gray-500">Material</h1>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Material" />
            </SelectTrigger>
            <SelectContent>
              {MATERIAL.map((name, index) => (
                <SelectItem key={index} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="block lg:hidden mt-10 ml-4">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side="left">
            {" "}
            {/* Use the side prop to position the sheet on the left */}
            <div className="flex flex-col mt-8 w-64 rounded-xl p-3">
              <h1 className="text-2xl font-semibold p-4">Filters</h1>

              <div className="ml-5">
                <h1 className="text-lg font-semibold text-gray-500">Size</h1>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {SIZE.map((name, index) => (
                      <SelectItem key={index} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="ml-5 mt-4">
                <h1 className="text-lg font-semibold text-gray-500">Color</h1>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Color" />
                  </SelectTrigger>
                  <SelectContent>
                    {COLORS.map((name, index) => (
                      <SelectItem key={index} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-10 ml-5">
                <h1 className="text-lg font-semibold text-gray-500">Price</h1>
                <Slider />
              </div>
              <div className="mt-6 ml-4">
                <h1 className="text-lg font-semibold text-gray-500">Brand</h1>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {BRAND.map((name, index) => (
                      <SelectItem key={index} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-6 ml-4">
                <h1 className="text-lg font-semibold text-gray-500">
                  Material
                </h1>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Material" />
                  </SelectTrigger>
                  <SelectContent>
                    {MATERIAL.map((name, index) => (
                      <SelectItem key={index} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="mt-6">Search</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
