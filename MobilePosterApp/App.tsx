import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const [activeTab, setActiveTab] = useState('Smart script');
  const [selectedPoster, setSelectedPoster] = useState('display');

  const posterTypes = [
    {
      id: 'display',
      title: 'New\nSpecial\nEdition',
      subtitle: 'display',
      bgColor: '#B8860B',
      image: '👗',
    },
    {
      id: 'promotion', 
      title: 'Up to\n50% Off',
      subtitle: 'Promotion',
      bgColor: '#808080',
      image: '🏷️'
    },
    {
      id: 'branding',
      title: 'Barber Shop', 
      subtitle: 'Branding',
      bgColor: '#2C5530',
      image: '🏪',
      badge: "Editor's Choice"
    },
    {
      id: 'announcement',
      title: 'JOIN US AS',
      subtitle: 'Announce...',
      bgColor: '#4A90A4', 
      image: '👩‍💼'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.timeText}>09.41</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Smart script' && styles.activeTab]}
          onPress={() => setActiveTab('Smart script')}
        >
          <Text style={[styles.tabText, activeTab === 'Smart script' && styles.activeTabText]}>
            Smart script
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Advanced script' && styles.activeTab]}
          onPress={() => setActiveTab('Advanced script')}
        >
          <Text style={[styles.tabText, activeTab === 'Advanced script' && styles.activeTabText]}>
            Advanced script
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Question */}
        <Text style={styles.questionText}>
          What type of posters do you want to create?
        </Text>

        {/* Poster Types */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.posterContainer}>
          {posterTypes.map((poster) => (
            <TouchableOpacity 
              key={poster.id}
              style={[
                styles.posterCard,
                { backgroundColor: poster.bgColor },
                selectedPoster === poster.id && styles.selectedPosterCard
              ]}
              onPress={() => setSelectedPoster(poster.id)}
            >
              {poster.badge && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{poster.badge}</Text>
                </View>
              )}
              <View style={styles.posterContent}>
                <Text style={styles.posterTitle}>{poster.title}</Text>
                <Text style={styles.posterEmoji}>{poster.image}</Text>
              </View>
              <View style={styles.posterFooter}>
                <Text style={styles.posterSubtitle}>{poster.subtitle}</Text>
                <Text style={styles.prodText}>Prod</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Description */}
        <Text style={styles.descriptionText}>
          stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting.
        </Text>

        {/* Settings */}
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Settings</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Size</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>1080 x 1920 px</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Category</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>Foods and beverage</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Generate Button */}
      <TouchableOpacity style={styles.generateButton}>
        <Text style={styles.generateText}>🎨 Generate</Text>
      </TouchableOpacity>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.brandText}>📱 CapCut</Text>
        <Text style={styles.curatedText}>curated by Mobbin</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  timeText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    color: '#ffffff',
    fontSize: 18,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  tab: {
    paddingBottom: 12,
    marginRight: 30,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#00BFFF',
  },
  tabText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  questionText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    marginBottom: 30,
  },
  posterContainer: {
    marginBottom: 30,
  },
  posterCard: {
    width: 120,
    height: 160,
    borderRadius: 16,
    marginRight: 16,
    padding: 12,
    justifyContent: 'space-between',
  },
  selectedPosterCard: {
    borderWidth: 3,
    borderColor: '#00BFFF',
  },
  badgeContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '500',
  },
  posterContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  posterEmoji: {
    fontSize: 24,
  },
  posterFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  posterSubtitle: {
    color: '#ffffff',
    fontSize: 12,
    opacity: 0.8,
  },
  prodText: {
    color: '#ffffff',
    fontSize: 10,
    opacity: 0.6,
  },
  descriptionText: {
    color: '#cccccc',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  settingsContainer: {
    marginBottom: 40,
  },
  settingsTitle: {
    color: '#666666',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  settingLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
  settingValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValueText: {
    color: '#cccccc',
    fontSize: 16,
    marginRight: 8,
  },
  chevron: {
    color: '#666666',
    fontSize: 18,
  },
  generateButton: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  generateText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  brandText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  curatedText: {
    color: '#666666',
    fontSize: 14,
  },
});
