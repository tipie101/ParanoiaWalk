import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="6vw" paddingLeft="6vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Wanna take a Paranoid Walk today?',
}
