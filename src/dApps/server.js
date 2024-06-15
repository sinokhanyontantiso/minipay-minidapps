const wallet = new WalletConnection(kit, privateKey);

    const tx = await wallet.sendTransaction({
      to: recipient,
      value: kit.web3.utils.toWei(amount, 'ether')
    });

    const receipt = await tx.waitReceipt();
    console.log('Transaction receipt:', receipt);

    res.json({ message: 'Transaction successful!' });
  } catch (error) {
    console.error('Error sending transaction:', error);
    res.status(500).json({ message: 'Error sending transaction' });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
