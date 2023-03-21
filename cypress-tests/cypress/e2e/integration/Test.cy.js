describe('Client integration testing', ()=>{
  it('Does 2 + 2 = 4', () => {
    expect(2+2).to.equal(4)
  });

  it('Does 4 + 5 = 10', () => {
    expect(4+5).to.not.equal(10)
  });

});