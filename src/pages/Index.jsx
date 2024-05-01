import { Box, Flex, Heading, Text, Button, VStack, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading mb={2}>John Doe</Heading>
        <Text fontSize="xl" mb={5}>Web Developer | UI/UX Enthusiast</Text>
        <VStack spacing={3} mb={5}>
          <Link href="#about" _hover={{ textDecoration: 'none' }}>
            <Button variant="outline">About</Button>
          </Link>
          <Link href="#portfolio" _hover={{ textDecoration: 'none' }}>
            <Button variant="outline">Portfolio</Button>
          </Link>
          <Link href="#contact" _hover={{ textDecoration: 'none' }}>
            <Button variant="outline">Contact</Button>
          </Link>
        </VStack>
        <Flex id="about" direction="column" align="center" p={5} bg="gray.100" w="full" mb={5}>
          <Heading size="lg" mb={3}>About Me</Heading>
          <Text textAlign="center" px={5}>
            Passionate about building excellent software that improves the lives of those around me.
            Specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
          </Text>
        </Flex>
        <Flex id="portfolio" direction="column" align="center" p={5} bg="gray.200" w="full" mb={5}>
          <Heading size="lg" mb={3}>Portfolio</Heading>
          <Text textAlign="center" px={5}>
            Here are a few design projects I've worked on recently. Want to see more? Email me.
          </Text>
        </Flex>
        <Flex id="contact" direction="column" align="center" p={5} bg="gray.300" w="full">
          <Heading size="lg" mb={3}>Contact</Heading>
          <VStack spacing={2}>
            <Link href="https://github.com" isExternal>
              <Button leftIcon={<FaGithub />}>GitHub</Button>
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Button leftIcon={<FaLinkedin />}>LinkedIn</Button>
            </Link>
            <Link href="mailto:example@example.com">
              <Button leftIcon={<FaEnvelope />}>Email Me</Button>
            </Link>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;