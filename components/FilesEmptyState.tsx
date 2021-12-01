import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const FilesEmptyState = () => (
  <Flex
    width="100%"
    p={["8", "16", "16"]}
    borderWidth="1px"
    borderRadius="lg"
    justify="center"
    direction="column"
    align="center"
    textAlign="center"
  >
    <Text fontSize={["lg", "xl", "2xl"]} fontWeight="400" mb={8}>
      There aren't any files
    </Text>
    <Text fontSize={["sm", "sm", "md"]} fontWeight="400">
      Drag and drop a file here or click the button on the bottom right to upload a file.
    </Text>
  </Flex>
);

export default FilesEmptyState;
