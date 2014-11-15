require_relative '../lib/foo'

describe 'Foo' do
  context 'testing 123' do
    let(:foo) { Foo.new }

    it 'returns a string' do
      expect(foo.bar).to_not be nil
    end
  end
end
