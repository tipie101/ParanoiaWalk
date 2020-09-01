import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { ParanoidMap } from '../components/ParanoidMap'
import { LeafletMap } from '../components/LeafletMap'

const Index = () => (
  <Container>
    <Hero />
    <Main>
    <ParanoidMap></ParanoidMap>
    </Main>
    <Footer>
      <Text>❤️</Text>
    </Footer>
  </Container>
)

export default Index
