const { write } = useContractWrite({
  address: contractAddr,
  abi: abi,
  functionName: "mintNFT",
  // args: [metadata?.url],
  value: parseEther("0.1"),
});

const mintNFT = async () => {
  await write?.({
    args: [metadata?.url],
  });
};
