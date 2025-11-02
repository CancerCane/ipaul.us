require 'yaml'
require 'jekyll'

RSpec.describe 'Jekyll Server Configuration' do
  let(:config_file) { File.join(__dir__, '..', '_config.yml') }
  let(:config) { YAML.load_file(config_file) }

  describe 'port configuration' do
    it 'starts on port 4001 as specified in _config.yml' do
      expect(config['port']).to eq(4001)
    end

    it 'has port configured in config file' do
      expect(config).to have_key('port')
    end

    it 'port is a valid integer' do
      expect(config['port']).to be_a(Integer)
    end

    it 'port is within valid range (1024-65535)' do
      expect(config['port']).to be_between(1024, 65535)
    end
  end
end
