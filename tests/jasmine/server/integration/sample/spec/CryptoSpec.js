describe('Crypto', function() {
  beforeEach(function() {
    C = CryptoJS;
  });

  it('should be able to encrypt a message.', function() {
    var encrypted = C.AES.encrypt(
      C.enc.Hex.parse('00112233445566778899aabbccddeeff'),
      C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f'), {
        mode: C.mode.ECB,
        padding: C.pad.NoPadding
      }
    ).ciphertext;

    expect(encrypted).toBeDefined();
    expect(encrypted.toString()).toBe("69c4e0d86a7b0430d8cdb78070b4c55a");
  });
});