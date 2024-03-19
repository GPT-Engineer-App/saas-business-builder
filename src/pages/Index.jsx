import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex minHeight="100vh" alignItems="center" justifyContent="space-between" flexDirection={["column", "column", "row"]} px={[4, 8, 16]} py={[8, 16]} bgGradient="linear(to-r, blue.500, purple.500)" color="white">
        <Box maxWidth="500px" mr={[0, 0, 8]} mb={[8, 8, 0]}>
          <Heading as="h1" size="2xl" mb={4}>
            Build Your SaaS Business from Scratch
          </Heading>
          <Text fontSize="xl" mb={8}>
            Learn how to ideate, validate, build, and launch your own successful SaaS business with our comprehensive online course.
          </Text>
          <Button colorScheme="white" color="blue.500" size="lg" fontWeight="bold" px={8}>
            Enroll Now
          </Button>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1522071901873-411886a10004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8fHwxNzEwODExOTA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Course preview" borderRadius="md" boxShadow="md" />
        </Box>
      </Flex>

      <Box py={16} px={[4, 8, 16]}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          What You'll Learn
        </Heading>
        <Stack spacing={8} direction={["column", "column", "row"]}>
          <Box flex={1} borderWidth={1} borderRadius="md" p={8}>
            <Heading as="h3" size="lg" mb={4}>
              Ideation and Validation
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Generating SaaS ideas
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Validating market demand
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Conducting competitor analysis
              </ListItem>
            </List>
          </Box>
          <Box flex={1} borderWidth={1} borderRadius="md" p={8}>
            <Heading as="h3" size="lg" mb={4}>
              Building Your Product
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Defining MVP features
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Designing user experience
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Development best practices
              </ListItem>
            </List>
          </Box>
          <Box flex={1} borderWidth={1} borderRadius="md" p={8}>
            <Heading as="h3" size="lg" mb={4}>
              Launch and Growth
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Pricing strategies
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                User acquisition channels
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Measuring and optimizing metrics
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>

      <Box bgGradient="linear(to-r, blue.500, purple.500)" py={16} textAlign="center">
        <Heading as="h2" size="xl" mb={8} color="white">
          Ready to Start Your SaaS Journey?
        </Heading>
        <Button colorScheme="white" color="blue.500" size="lg" fontWeight="bold" px={8}>
          Enroll in Course
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
