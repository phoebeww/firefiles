import React from "react";
import { Box, Skeleton, Table, Tr, Th, Td } from "@chakra-ui/react";

interface Props {
  width?: string;
}

const SkeletonRow: React.FC<Props> = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="5px" width={width} my={3} />
    </Td>
    <Td>
      <Skeleton height="5px" width={width} my={3} />
    </Td>
    <Td>
      <Skeleton height="5px" width={width} my={3} />
    </Td>
    <Td>
      <Skeleton height="5px" width={width} my={3} />
    </Td>
    <Td>
      <Skeleton height="5px" width={width} my={3} />
    </Td>
  </Box>
);

const FilesTableSkeleton = () => {
  return (
		<Box borderWidth="1px" borderRadius="lg" overflowX="auto">
			<Table>
				<thead>
					<Tr>
						<Th>Name</Th>
						<Th>Size</Th>
						<Th>Share</Th>
						<Th>Download</Th>
						<Th>Delete</Th>
					</Tr>
				</thead>
				<tbody>
					<SkeletonRow width="75px" />
					<SkeletonRow width="125px" />
					<SkeletonRow width="50px" />
					<SkeletonRow width="100px" />
				</tbody>
			</Table>
		</Box>
	);
};

export default FilesTableSkeleton;
