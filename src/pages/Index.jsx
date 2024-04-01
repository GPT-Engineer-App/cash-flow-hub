import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Input, Image } from "@chakra-ui/react";
import { FaUser, FaMoneyBillWave, FaHistory } from "react-icons/fa";

const Index = () => {
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");
  const [history, setHistory] = useState([]);

  const handleDeposit = () => {
    const depositAmount = parseInt(amount);
    if (depositAmount > 0) {
      setBalance(balance + depositAmount);
      setHistory([...history, { type: "deposit", amount: depositAmount }]);
      setAmount("");
    }
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseInt(amount);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
      setBalance(balance - withdrawAmount);
      setHistory([...history, { type: "withdraw", amount: withdrawAmount }]);
      setAmount("");
    }
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <HStack>
          <Image src="https://images.unsplash.com/photo-1536522971180-dfb1cd2e5259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5rJTIwbG9nb3xlbnwwfHx8fDE3MTE5ODQ0ODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Bank Logo" boxSize="50px" />
          <Heading>My Bank App</Heading>
        </HStack>
        <Box bg="gray.100" p={4} borderRadius="md">
          <HStack>
            <FaUser size={24} />
            <Text fontSize="xl">Welcome, John Doe</Text>
          </HStack>
        </Box>
        <Box bg="green.100" p={4} borderRadius="md">
          <HStack>
            <FaMoneyBillWave size={24} />
            <Text fontSize="2xl">Balance: ${balance}</Text>
          </HStack>
        </Box>
        <HStack>
          <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <Button colorScheme="green" onClick={handleDeposit}>
            Deposit
          </Button>
          <Button colorScheme="red" onClick={handleWithdraw}>
            Withdraw
          </Button>
        </HStack>
        <Box>
          <HStack>
            <FaHistory size={24} />
            <Heading size="md">Transaction History</Heading>
          </HStack>
          <VStack align="stretch" mt={4}>
            {history.map((transaction, index) => (
              <Box key={index} bg={transaction.type === "deposit" ? "green.50" : "red.50"} p={2} borderRadius="md">
                <Text>
                  {transaction.type === "deposit" ? "Deposit" : "Withdraw"}: ${transaction.amount}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
