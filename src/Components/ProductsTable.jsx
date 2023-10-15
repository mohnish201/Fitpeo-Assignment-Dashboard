import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

const ProductsTable = () => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-bold">Product Sell</h1>

        <div className="flex items-center gap-5">
          <InputGroup>
            <InputLeftElement pointerEvents="none" h="35px">
              <FiSearch color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              size={"sm"}
              w="100%"
              placeholder="Search"
              bgColor={"blackAlpha.50"}
              borderRadius="6px"
            />
          </InputGroup>

          <Select
            bgColor={"blackAlpha.50"}
            size="sm"
            borderRadius="6px"
            placeholder="Last 30 days"
            color={"blackAlpha.600"}
            fontSize="sm"
            fontWeight="medium"
          >
            {/* <option>Last 30 Days</option> */}
          </Select>
        </div>
      </div>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product Name</Th>
              <Th>Stock</Th>
              <Th>Price</Th>
              <Th>Total Sales</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <div className="flex items-center gap-5">
                  <Image
                    src="https://i.pinimg.com/564x/b2/28/0e/b2280ebec23caec974c4d8d9ad21f9d1.jpg"
                    w="10%"
                    borderRadius={"8px"}
                  />

                  <div>
                    <h1 className="text-md font-bold">Abstract 3D</h1>
                    <p className="text-sm text-slate-500 font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </Td>
              <Td className="font-bold text-sm ">32 in stock</Td>
              <Td className="font-bold text-sm " isNumeric>
                $45.99
              </Td>
              <Td className="font-bold text-sm " isNumeric>
                20
              </Td>
            </Tr>
            <Tr>
              <Td>
                <div className="flex items-center gap-5">
                  <Image
                    src="https://i.pinimg.com/564x/d5/8a/6a/d58a6a4ee96a1cd06efaafc2458772f0.jpg"
                    w="10%"
                    borderRadius={"8px"}
                  />
                  <div>
                    <h1 className="text-md font-bold">Abstract 3D</h1>
                    <p className="text-sm text-slate-500 font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </Td>
              <Td className="font-bold text-sm ">32 in stock</Td>
              <Td className="font-bold text-sm " isNumeric>
                $45.99
              </Td>
              <Td className="font-bold text-sm " isNumeric>
                20
              </Td>
            </Tr>
            <Tr>
              <Td>
                <div className="flex items-center gap-5">
                  <Image
                    src="https://i.pinimg.com/564x/c9/ee/1a/c9ee1a6c816133d9247c56c0522f021a.jpg"
                    w="10%"
                    borderRadius={"8px"}
                  />
                  <div>
                    <h1 className="text-md font-bold">Abstract 3D</h1>
                    <p className="text-sm text-slate-500 font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </Td>
              <Td className="font-bold text-sm">32 in stock</Td>
              <Td className="font-bold text-sm " isNumeric>
                $45.99
              </Td>
              <Td className="font-bold text-sm " isNumeric>
                20
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsTable;
